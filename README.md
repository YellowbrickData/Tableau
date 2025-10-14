Yellowbrick Tableau Taco Connector 5.0



### Overview

Yellowbrick Taco connector file for Tableau can be deployed under Tableau Desktop, Server, and Bridge.

Note:

* This version of the connector uses the PostgreSQL JDBC driver an extends the functionality for Yellowbrick.
* You can use the PostgreSQL connector if the Yellowbrick connector is not yet implemented.
* The connector cannot be deployed directly under Tableau cloud; you need to use Tableau Bridge. Tableau Bridge is a tool for connecting Tableau Cloud to on-premises data.
* Taco files are only supported in Tableau 2019.4 and later. These directions assume Tableau 2021.2 or later.



### Installation



#### Install the PostgreSQL JDBC driver

If  you have not already done so, install the PostgreSQL JDBC driver under Tableau. For instructions for your platform:

1. Navigate to https://www.tableau.com/support/drivers
2. From "Data Source", select PostgreSQL
3. From "Platform", select your OS.

Alternately, if you attempt to use the PostgreSQL connector and the driver is not installed on your computer, Tableau displays a message in the connection dialog box with a link to the Driver Download page.



#### Install the Yellowbrick Taco file

Deploy the Tableau .taco file to the "Connectors" directory for your Tableau product and then restart Tableau.



To make the connector to be available to all users, use the default repository connectors directory for your platform:

1. Create the directory if it does not exist:

   * Tableau Desktop \& Server (Windows) - C:\\Program Files\\Tableau\\Connectors
   * Tableau Server <= 2021.1 (Windows) - C:\\ProgramData\\Tableau\\Tableau Server\\data\\tabsvc\\vizqlserver\\Connectors
   * Tableau Desktop \& Server (MacOS)   - ~/Documents/My Tableau Repository/Connectors
   * Tableau Desktop \& Server (Linux)   - /opt/tableau/connectors
   * Tableau Bridge Client (Windows)    - C:\\Users\\%USERNAME%\\Documents\\My Tableau Bridge Repository\\Connectors
   * Tableau Bridge Client (Linux)      - /root/Documents/My\_Tableau\_Bridge\_Repository/Connectors

2. Copy the yellowbrick-5.x.x.taco file to the directory above for your platform.
3. Restart your Tableau (Desktop or Server) instance. This step is required for the connector to be recognized.
4. The "Yellowbrick JDBC by Yellowbrick Data" connector should appear in the list of servers when you create a new data source.



Note:

* If Tableau Server is installed in a container, see the Tableau article "[Tableau Server in a Container](https://help.tableau.com/current/server-linux/en-us/server-in-container.htm)".
* If you use one of the alternate locations below, be aware that
* a connector class can only be loaded once; The connector instance loaded first have precedence
* Tableau loads connectors by directory in the following order:

  * Built-in Tableau connectors
  * Connectors located in C:\\Program Files\\Tableau\\Connectors (Windows) or/opt/tableau/connectors (Linux)
  * Connectors located in My Tableau Repository/Connectors
  * (Optional) Connectors in the dev path specified by -DConnectPluginsPath





#### Alternate: Install the connector for a specified user

Use the user directory for your Tableau product

* Tableau Desktop (Windows) - C:\\Users\\%USERNAME%\\Documents\\My Tableau Repository\\Connectors
* Tableau Desktop (MacOS)   - $HOME/Documents/My Tableau Repository/Connectors
* Tableau Desktop (Linux)   - /opt/tableau/connectors



#### Alternate: Install connector using the dev path

If your instance used dev paths, you can install into the directory specified by -DConnectPluginsPath



#### Connector Connection Options

* Fetch Size - The Yellowbrick connection configuration includes the option "Fetch Size". The Default is 0 which means fetch all the rows up front. If using large result sets, specify a block fetch set size like 10000.
