	<Biml xmlns="http://schemas.varigence.com/biml.xsd">	    
		<Packages>	        
			<Package Name="My Package" ConstraintMode="Linear" >	            
				<Tasks>			                
					<Dataflow Name="My Dataflow Task">	                    
						<Transformations>							
							<OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">								
								<DirectInput>select * from DimInstrument</DirectInput>			                
							</OleDbSource>								
							<!-- Copy the Category column to a new column called SubCategory -->							
							<CopyColumn Name="Copy Column Transformation">								
								<Columns>	                               
									<Column SourceColumn="Category" TargetColumn="SubCategory" />
									
                                    </Columns>							
							</CopyColumn>														
							<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" >	
								
            				</FlatFileDestination>	                    
						</Transformations>	                
					</Dataflow>	            
				</Tasks>	        
			</Package>	    
		</Packages>	
	</Biml>
