# Applying Load Parameters

## Supporting Videos

![Applying Load Parameters](https://www.youtube.com/watch?v= TODO ?rel=0&autoplay=0 "Applying Load Parameters")

## Supporting BimlFlex Documentation

- @bimlflex-parameters

## Applying Load Parameters

Deriving a valid delta is one of the most important steps in the analysis of a source system.

For some sources there are change deltas presented for easy consumption, others have CDC enabled. Some sources have no concept of change tracking so the data warehouse architect needs to analyze change patterns and derive an alternate delta sourcing approach.

One common approach is to use a high watermark column that can serve as a parameter for loading. The columns max value at each load is stored in the parameters table in the BimlCatalog and that value is used as a query parameter on the next load.

BimlFlex has direct support for parameter management and can either use a simple single value for sources where the new value can be easily derived (such as for a database destination) or it can support source windowing by querying the high value directly from the source.

For the trial a high watermark load parameter is used. The source system has been analysed and the `ModifiedDate` column has been determined to be trustworthy enough to be used as a high watermark column. All table loads can use this column as a parameter to olnly get changed data since last load.
