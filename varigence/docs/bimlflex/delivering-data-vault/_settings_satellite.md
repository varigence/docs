##### [Select:](#tab/settings-satellite-select)

Choose a tab to view either setting descriptions or examples.

##### [Description](#tab/settings-satellite-description)

| Group             | Section     | Type                                                                 | Setting                             | Description                                                                                                                          |
| ----------------- | ----------- | -------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Data Vault        | Accelerator | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Accelerate Link Satellite           | Should the accelerator create Link Satellites for effectiveness and attributes from source metadata                                  |
| Data Vault        | Accelerator | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Accelerate Link Satellite Keys      | Should the accelerator add the Integration Key to the Link Satellites for effectiveness                                              |
| Data Vault        | Accelerator | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Append Link Satellite Record Source | Should the Accelerator append the RecordSource to the Link Satellite name                                                            |
| Data Vault        | Process     | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | End Date Satellite                  | Should end dating processing be applied to the DV Satellites                                                                        |
| Data Vault        | Process     | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Single Change Satellite             | Set this to true if loading into Data Vault and the Delta only has single changes to each key. This will provide optimized ELT loads |
| Data Vault Naming | Naming      | ![Text Datatype](images/svg-icons/text.svg "Text Datatype")          | Append Link Satellite               | The string to append to Link Satellite names                                                                                         |
| Data Vault Naming | Naming      | ![Text Datatype](images/svg-icons/text.svg "Text Datatype")          | Append Satellite                    | The string to append to Satellite names                                                                                              |

##### [Default Value](#tab/settings-satellite-default)

| Group             | Section     | Type                                                                 | Setting                             | Default Value |
| ----------------- | ----------- | -------------------------------------------------------------------- | ----------------------------------- | ------------- |
| Data Vault        | Accelerator | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Accelerate Link Satellite           | `false`       |
| Data Vault        | Accelerator | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Accelerate Link Satellite Keys      | `true`        |
| Data Vault        | Accelerator | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Append Link Satellite Record Source | `true`        |
| Data Vault        | Process     | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | End Date Satellite                  | `false`       |
| Data Vault        | Process     | ![Boolean Datatype](images/svg-icons/boolean.svg "Boolean Datatype") | Single Change Satellite             | `false`       |
| Data Vault Naming | Naming      | ![Text Datatype](images/svg-icons/text.svg "Text Datatype")          | Append Link Satellite               | LSAT          |
| Data Vault Naming | Naming      | ![Text Datatype](images/svg-icons/text.svg "Text Datatype")          | Append Satellite                    | SAT           |

***