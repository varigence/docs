	<Biml xmlns="http://schemas.varigence.com/biml.xsd">	    
		<Packages>	        
			<Package Name="My Package" ConstraintMode="Linear" >	          
				<Tasks>			                
					<Dataflow Name="My Dataflow Task">	                    
						<Transformations>							
							<OleDbSource Name="FedReserve" ConnectionName="FederalReserveInstruments">								
								<DirectInput>select * from DimInstrument</DirectInput>			                
							</OleDbSource>								
							<!-- Gets a random sample of 25 rows from DimInstrument -->							
							<RowSampling Name="Percentage Sampling Transformation" NumberOfRows="25" />														
							<FlatFileDestination Name="OutputFile" ConnectionName="FlatFileConnection" >					
					
                			</FlatFileDestination>	        
						</Transformations>	         
					</Dataflow>	         
				</Tasks>	      
			</Package>	  
		</Packages>	
	</Biml>
