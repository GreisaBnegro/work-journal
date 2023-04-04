# Datubāzes struktūra

## Tabula 'Status'
Lauki:
- ID [int]
- Name (ENG) [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'Users' 
Lauki:
- ID [int]
- FullName (ENG) [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'UserOperations'
Lauki:
- ID [int]
- UserID [int]
- OperationID [int]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'Operations'
Lauki:
- ID [int]
- OperationName [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'IssueTypes'
Lauki:
- ID [int]
- Name (ENG) [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'DeviceTypes'
Lauki:
- ID [int]
- Name (ENG) [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'Sources'
Lauki:
- ID [int]
- Name (ENG) [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'Location'
Lauki:
- ID [int]
- Name (ENG) [varchar(50)]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'Executions'
Lauki:
- ID [int]
- Action (ENG) [varchar(50)]
- StatusID [int]
- ExecutionDate [datetime]
- ExecuteTime [int]
- UserId [int]
- Created Date [timestamp]
- Last Edited [datetime]

## Tabula 'Problemos'
Lauki:
- ID [int]
- ProblemDate [datetime]
- UserId [int]
- SourceId [int]
- ProblemDescription (ENG) [varchar(200)]
- LocationID [int]
- DeviceTypeID [int]
- IssueTypeID [int]
- Remarks [varchar(20)]
- Created Date [timestamp]
- Last Edited [datetime]