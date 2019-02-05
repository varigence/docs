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
*
