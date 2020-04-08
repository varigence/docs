# Flat File Format

```biml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">
    <FileFormats>
        <!-- Flat file format that specifies the columns and delimeter used to extract a table from a flat file.  -->
        <FlatFileFormat Name="MetadataFileFormat" RowDelimiter="LF" ColumnNamesInFirstDataRow="true" IsUnicode="false">
            <Columns>
                <Column Name="Category" DataType="String" Length="128" Delimiter="Tab" CodePage="1252" />
                <Column Name="DisplayName" DataType="String" Length="256" Delimiter="Tab" />
                <Column Name="Maturity" DataType="String" Length="32" Delimiter="Tab" />
                <Column Name="Frequency" DataType="String" Length="32" Delimiter="Tab" />
                <Column Name="Status" DataType="String" Length="32" Delimiter="Tab" />
                <Column Name="CompactName" DataType="String" Length="32" Delimiter="Tab" />
                <Column Name="Url" DataType="String" Length="4000" Delimiter="Tab" />
                <Column Name="HeaderRowsToSkip" Delimiter="Tab" />
                <Column Name="DateGrain" DataType="String" Length="32" Delimiter="LF" />
            </Columns>
        </FlatFileFormat>
    </FileFormats>
</Biml>
```
