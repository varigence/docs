# Import Column

```xml
<Biml xmlns="http://schemas.varigence.com/biml.xsd">	    
	<Packages>	        
		<Package Name="My New Package" ConstraintMode="Linear">	            
			<Tasks>			                
				<Dataflow Name="My Dataflow Task">	                    
					<Transformations>							
						<ScriptComponentSource ProjectCoreName="SC_eb1debcd2374468ebccbbfad4fbe5976" Name="Script Component Source">								
							<ScriptComponentProjectReference ScriptComponentProjectName="Component Script Project2" />							
							
							</ScriptComponentSource>	
							
							<!-- Import column from the above Script Component and create the column named FileName -->							
							<ImportColumn Name="Import Column Transformation">								
								<InputPath OutputPathName="Script Component Source.Output0" />								
								<Columns>									
									<Column SourceColumn="FileName" TargetColumn="FileName" />								
									
									</Columns>							
							</ImportColumn>							
								<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection">							
										
								<InputPath OutputPathName="Import Column Transformation.Output" />						
										
						</FlatFileDestination>	             
					</Transformations>	               
				</Dataflow>	  
			</Tasks>	  
		</Package>	   
	</Packages>	
</Biml>
```
