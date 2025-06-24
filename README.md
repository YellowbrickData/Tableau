# Tableau Connector

Releasing v5.0 connector for compatibility with Tableau v2023.1


Yellowbrick Data customization of Postgres JDBC Connector

Only the yellowbrick-x.x.x.taco file is needed to install the Yellowbrick Tableau connector.  All other files are for packaging the connector itself. 

**INSTALLATION:**

!!! NOTE:  You must first install the PostgreSQL driver First.  

You can download the Java 8 JDBC PostgreSQL driver here: [Here](https://jdbc.postgresql.org/download).  Then copy the JAR file here:
* On Mac OSX, ~/Library/Tableau/Drivers
* On Windows, c:\Program Files\Tableau\Drivers

Then copy the yellowbrick-x.x.x.taco file to:
* On Mac OSX,  ~/Documents/My Tableau Repository/Connectors
* On Windows, c:\Users\<userid>\Documents\My Tableau Repository\Connectors 

Once the JAR file and TACO file are copied to their respective directories, restart Tableau.

The "Yellowbrick JDBC by Yellowbrick Data" connector should appear in the list of servers when you connect to a new data source.  Taco files are only supported in Tableau 2019.4 and later. 
