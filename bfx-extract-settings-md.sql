SET NOCOUNT ON; 

IF OBJECT_ID('tempdb..#MD') IS NOT NULL DROP TABLE #MD;
CREATE TABLE #MD ([md]	NVARCHAR(MAX))

DECLARE	 @displayGrouping	NVARCHAR(50)
		,@displayHeading	NVARCHAR(MAX) = ''

DECLARE insert_cursor CURSOR FOR  
SELECT	DISTINCT [SettingDisplayGrouping]
FROM	[app].[Settings]
ORDER BY [SettingDisplayGrouping]

OPEN insert_cursor   
FETCH NEXT FROM insert_cursor INTO @displayGrouping

WHILE @@FETCH_STATUS = 0   
BEGIN   
	IF OBJECT_ID('tempdb..#SETTING') IS NOT NULL DROP TABLE #SETTING;
	SELECT	[SettingKey], [Description]
	INTO	#SETTING
	FROM	[app].[Settings]
	WHERE	[CustomerUID] = '00000000-0000-0000-0000-000000000000' 
		AND [VersionUID] = '00000000-0000-0000-0000-000000000000'
		AND	[SettingDisplayGrouping] = @displayGrouping
	ORDER BY [SettingDisplayOrder]

	INSERT INTO #MD ([md])
	SELECT	'### ' + @displayGrouping AS [md]
	UNION ALL
	SELECT	'' AS [md]
	UNION ALL
	SELECT	'| Setting Key                              | Setting Description                                                              |'  AS [md]
	UNION ALL
	SELECT	'| ---------------------------------------- | -------------------------------------------------------------------------------- |' AS [md]
	UNION ALL
	SELECT	'| ' + COALESCE(CAST([SettingKey] AS CHAR(40)),'') +
			' | ' + REPLACE(COALESCE(CAST([Description] AS VARCHAR(2000)),''), '"', '`') +
			' |' AS [md]
	FROM	#SETTING
	UNION ALL 
	SELECT	'' AS [md]
	
	FETCH NEXT FROM insert_cursor INTO @displayGrouping
END   

CLOSE insert_cursor   
DEALLOCATE insert_cursor

SELECT *
FROM #MD