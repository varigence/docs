* feb012618e0f61a810a27445354780562f808edd - Update to accommodate new expression syntax requirements
* 995722c4bba659a343bc0e77d5691d295a1bb5f0 - BFX - Fix Snowflake Custom Component dynamic sql Biml definition.
* 5f311faad1f5d6a8401a9c993ed53a7d53aa811c - Apply Snowflake changes lost during merge
* 7ebe297e823139ea21943cede05fbb5d47ed4e15 - BFX - Add Trigger EP for ADF
* 10af9bdd8c64905d942e94782142bf3b12fb967b - BFX - Change EP filename
* 55c0393d3fc2ef68efa94d2a1effebf95e631399 - BFX - Update EP for BimlCatalog Linked Service
* f36b52cf8dba5883155a873d62ff5e42058aa12e - BFX: Fix Snowflake source to staging SnowSql script
* 6a3f97cce76c81dde24693f2a71b87d6c98d02be - Add RowChangeType to Hash for DataVault and DataMarts to accomodate ChangeDataCapture
* 56a69a06a32bc0a89aabf3b6224cc5805574a3d0 - Update 0.01.1-flx-import-cache.biml - To allow PsaUseCacheLookup and DeleteDetectionEnabled both being set to Y without double set of cache files created.
* 699609bd4bbbd734492656bfedee94c603ad393b - Adding HashDynamic to BimlCatalog components to accomodate additional hashing options.
* cafee9032aa2ecccce6ec5418248483ca8a1e93b - Add support to override MDS variables through Extension Points
* 1e68573db9fa67c5dd6050432f5a44283be8968f - Minor fix to ExcludeFromModel filtering on IsUser mode.
* def0964ee2845d37737ef3a5291ffe59c1957eb3 - Change BimlFLex SSIS CustomComponents to accomodate MD5, SHA1, SHA256, SHA512 for both Binary and string hashes.
* d05d5d4f6d10134a3303493528bf434a7988c9e5 - Isolate column observable between columns and parameters screens.
* 2ea6c7d322bd06efb5d3ce1ffbcffb7e21325cab - Add support for bk column dependencies in delete package derived columns
* d9ecb5b18eba6409b5dd9d38bdd1efeac3ff29d0 - Fixed some paths so that bimlflex title icon shows in all deployment modes.
* afad3090c693eb1de206cb1c29e7f2896d64557e - Fixes to Binary hash biml code
* fd5d9b13c8473653c88f12050c537fe7cdd0ea88 - Add HashDual logic for single hash value.
* 3c111aedd18d004e51fc7326566ff8b94db93524 - BFX - Add UseSqlCompatibleRowHash Setting for Full Row hash backward compatability.
* 1a9eafd0ea9e16115c6096d77a43fc2ecfe2fde1 -  Add Dacpac batch files for easy test deployments.
* f66fab6cb7b90fb548fad9a60ee12e01b2b97be3 - change time format string to accommodate 24h hour format
* 4d867e1bab1d86ebab28d034b1ce0d841ea214fd - BFX - Add ImportMetadata bulk process procedures
* 05bc08a800350e6688c357b1037930c8d86ad65f - BFX - Fix SSDT sqlproj file so that properties work
* e6bcf42b5943ce4e8664ec5e19c6655a8b04744d - BFX - Fix LSAT DvCacheLookup with DrivingKeys
* 74b6d1e01c63443937e8113a854e2691351999fa - BFX - Utility Add commandline Snaphot Uploader
* c5ef40de6512e1d5455b62621c9513e6957022f6 - BFX - Fix the HashDynamic CustomComponent path for hashin Binary.
* 6e1f0c04b951393aa4e144b33fed6a80f155ba9c - BFX -  Fix Dimension SP ELT Load source query references identity column and lookup joins on both BK and PK (Identity column) for SQL ELT
* b641bfbc9c6962b680d82446e4a61100abd19376 - BFX - Internal Add BuildTest Scripts
* 96e5ca4c007980fce6bfd5826e78866ebad77c7b - BFX - Fix Snowflake FileFormat Setting
* 9a9e234fa5ad5a9901bf93c9b2f7baa36824ec57 - BFX - Fix DV Cache Lookup Sort order when combined with IsDrivingKey
* 1e3ecb30f44a8baee839aa903cec0f9ddd4d4a4d - BFX - Internal adding some more testing metadata
* eedfb01383cb0dab26c635cf3f87cc6d404381b6 - BFX - Add logging to Snowflake Custom Component
* 8366e9eabcb66a238f7f23eded460990f1ac31f3 - Add Sybase source metadata sample query
* 7ac299b585c72556f2f0819b009d7494cf38e19f - Added proxy support to snowflake SSIS component
* 47217e3b984786bc1781e3c9f9dd10db46042c80 - Snowflake connector potential fix and diagnostics
* 8649fe24ad97bccc9272ad39801b6a1ed2a63925 - BFX - Fix SSIS CustomComponent for HashDynamic and Compatability with previous hashing
* 7f12cbdb15528f615a49eabc742411ff529e6a38 - BFX - Fix SalesForce Date Parameter to use UTC
* 0df3e31362e1a8a27e79d532e2f51359528c9dbc - BFX - Add MaximumInsertCommitSize, BatchSize, CheckConstraints to SRC - STG OLEDB Destination 
* cf84d557882d019066211cf5a1abcfd85df95e4c - BFX  - Fix Duplicate BK in Reference tables in Data Vault ELT
* 6aa53696839faba03a219e028f475d018c55eb74 - BFX - Fix InitializeOverride ExtensionPoint to include Batch inheritance
* 67ba9bc39ceb2ed7bec7aaf8aaa44fe15b9b685c - BFX - Update BimlFlex database converting SsisExpression and SqlExpression to use SsisDataflowExpression and SqlSourceExpression in preparation for Azure Data Factory.
* 39d5f24a19b23a0d4ac12278508417fe5f1ca93d - BFX - Move CDC Get MAX Lsn up in Dataflow to accomodate changes during InitialLoad
* 5cc009b803e58cd98a3e6c85354f069a65a018c5 - BFX - Add TargetPreProcess and TargetPostProcess to Data Vault and Data Mart Dataflow to accomodate Source and Target table paramneters
* 1f5ce5bda7f8b129774499f2b78e622076e2c2f7 - BFX - Remove auto conversion of GUID to String(50) for ADF Copy compatability.
* c2e8b7536b64f84f77889b14906080a2892e8e53 - BFX - Minnor fix to HashAlgorithm for HASHBYTES
* 5de24afde6a1f7f49e58d37929b90b51f8be7a94 - BFX - BETA Update SQLDW Staging table script for ADF template.
* 35af51f4830aaa21562184d5730e79394b5b41d0 - BFX - Fix DataVault Accelerator schema graph preview not displaying by adding additional Annotation tags
* b0c4f247871278730e450e1b37eb82b5c73bf862 - update end processes to accommodate closing of legacy exections when needed. A previous scenario could lead to non-closed previous executions stalling new executions and never getting reset by the orchestration
* 1f93a10282b7355ad6c6bfaf02b679ff3daeb32a - BFX - Add additional Azure Settings AzureAllowPolybase, AzureStageOnExtract, AzureExternalFileConversion. TODO: Document their usage
* fb0f945f0dfb2ec9a7699b410a5d91d1c10cd592 - BFX - Add Setting to control conversion og Guid to String. ConvertGuidToString
* 758f8dfb105b721e8469824af530e830687588cd - BFX - Apply SQLDW backward compatability changes for previous bundles.
* d88727073a9a31f80a2d09a3ee1dbac93b45fff9 - BFX -  Fix DV target project allocation when source table is mapped to a HUB that is different to the SAT of the record source.
* d37024c1c104943856e72b9dcffb7716549714a1 - BFX - Minnor fix to File archiving for missing ReadOnlyVariable ZipArchiveImport
* 14722ea9fd4ed6460a362b6760e859dfef8aa92f - BFX - Rename column IsAltBusinessKey to IsSourceKey. This change require database upgrade and addin upgrade.
* f370446d9ce62eda2279cb7bc8af2ca8cd8b9789 - Create BatchPostProcess_PostProcessUpdateStatistics.biml. Sample Extension Point for updating statistics on destination RDV tables after ELT Batch completes
* bca190b57a797a0035f13a6a8fcc4e3e41759983 - add support for AdfPostCopy Extension Point
* 47767b97ac88cb40509156dfacb7720087dc8613 - BFX - Refactor ImportMetadata dialog in new UI
* 7ebe3858e0a0ee75b4b638150c925200674f1019 - Update IntegrationTemplate.sql. Also add SSIS prefix to make meaning more explicit for web app
*
