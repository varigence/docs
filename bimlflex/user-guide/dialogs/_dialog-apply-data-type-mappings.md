#### Apply Data Type Mappings Dialog

From here you can apply your **Data Type Mappings** to an individual **Record Source**.  Select your **Record Source** from the dropdown, enable the options you want and click **Apply**.  Defaults should be acceptable for most cases but options are provided to support user cases where you may only be concerned with a particular property.

![Apply Data Type Mappings Dialog -mtb-20-image](../../static/img/bimlflex-dialog-apply-data-type-mappings.png "Apply Data Type Mappings Dialog")

##### Apply Data Type Mapping Options

| Option                          | Description |
| ------------------------------- | ----------- |
| Override Existing Mappings      | When enabled, any existing settings will be overridden with current settings.  When disabled only previously unmapped columns will have logic applied. |
| Apply Data Type Mappings        | When enabled, applies the *Mapped To Data Type* from the **Data Type Mappings** to the *Data Type Mapping* property of the **Columns** with the defined data types. |
| Apply SQL Source Expression     | When enabled, applies the *SQL Source Expression* from the **Data Type Mappings** to the *SQL Source Expression* property of the **Columns** with the defined data types. |
| Apply SSIS Data Flow Expression | When enabled, applies the *SSIS Data Flow Expression* from the **Data Type Mappings** to the *SSIS Data Flow Expression* property of the **Columns** with the defined data types. |
| Apply Column Alias              | When enabled, applies the *Column Alias* from the **Data Type Mappings** to the *Column Alias* property of the **Columns** with the defined data types. |
| Apply Convert Source Type       | When enabled, applies the *DATA TYPE, LENGTH, PRECISION* and *SCALE* from the Data Type Mappings to the *DATA TYPE, LENGTH, PRECISION* and *SCALE* property of the Columns with the defined data types if the Data Type Mapping has the CONVERT DATA TYPE MAPPING enabled. |
