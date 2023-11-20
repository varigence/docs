
$imageFolder = "$($PSScriptRoot)\varigence\static\img"

# ;

Write-Output  $imageFolder
# foreach ($file in Get-ChildItem -Path "C:\Onedrive\Varigence\Varigence - Design Assets\Logos" -Recurse -Filter *.svg) {
# 	Write-Output "Svg Minify: $($file.FullName)"
# 	# $string = Get-Content $file.FullName -Raw
# 	# $string = $string -replace '(?s)\s+(?!(?:(?!</?pre\b).)*</pre>)', ' '
# 	# $string = $string -replace '(?s)\s*\n\s*(?!(?:(?!</?pre\b).)*</pre>)', '\n'
# 	# $string = $string -replace '(?s)\s*\>\s*\<\s*(?!(?:(?!</?pre\b).)*</pre>)', '><'
# 	# $string = $string -replace '(?s)<!--((?:(?!</?pre\b).)*?)-->(?!(?:(?!</?pre\b).)*</pre>)', ''
# 	# $string = $string -replace '([ ]{2,})', ' '
# 	# $string | Out-File -FilePath "$($imageFolder)\$($file.Name)" -Encoding "ASCII" -ErrorAction Stop
# }

# foreach ($file in Get-ChildItem -Path "C:\VarigenceWebsites\varigence.com\varigencecom\Content\Images\icons" -Recurse -Filter *.svg) {
# 	Copy-Item $file -Destination "C:\varigencedocs\content\images\icons" -Force
# }
