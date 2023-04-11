CREATE TABLE IF NOT EXISTS gbk_Status(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_Users(
    ID int NOT NULL AUTO_INCREMENT,
    FullName varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_Operations(
    ID int NOT NULL AUTO_INCREMENT,
    OperationName varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_UserOperations(
    ID int NOT NULL AUTO_INCREMENT,
    UserID int NOT NULL,
    OperationID int NOT NULL,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID),
    CONSTRAINT FK_UserOperationUser FOREIGN KEY (UserID) REFERENCES gbk_Users (ID),
    CONSTRAINT FK_UserOperationOperation FOREIGN KEY (OperationID) REFERENCES gbk_Operations (ID)
);
CREATE TABLE IF NOT EXISTS gbk_IssueTypes(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_DeviceTypes(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_Sources(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_Location(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS gbk_Executions(
    ID int NOT NULL AUTO_INCREMENT,
    Action varchar(50),
    StatusID int NOT NULL,
    ExecutionDate datetime,
    ExecuteTime int,
    UserId int NOT NULL,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID),
    CONSTRAINT FK_ExecutionStatus FOREIGN KEY (StatusID) REFERENCES gbk_Status (ID),
    CONSTRAINT FK_ExecutionUser FOREIGN KEY (UserID) REFERENCES gbk_Users (ID)
);
CREATE TABLE IF NOT EXISTS gbk_Problemos(
    ID int NOT NULL AUTO_INCREMENT,
    ProblemDate datetime,
    UserId int NOT NULL,
    SourceId int NOT NULL,
    ProblemDescription varchar(200),
    LocationID int NOT NULL,
    DeviceTypeID int NOT NULL,
    IssueTypeID int NOT NULL,
    Remarks varchar(20),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (ID),
    CONSTRAINT FK_ProblemosUser FOREIGN KEY (UserID) REFERENCES gbk_Users (ID),
    CONSTRAINT FK_ProblemosSource FOREIGN KEY (SourceId) REFERENCES gbk_Sources (ID),
    CONSTRAINT FK_ProblemosLocation FOREIGN KEY (LocationID) REFERENCES gbk_Location (ID),
    CONSTRAINT FK_ProblemosDeviceType FOREIGN KEY (DeviceTypeID) REFERENCES gbk_DeviceTypes (ID),
    CONSTRAINT FK_ProblemosIssueType FOREIGN KEY (IssueTypeID) REFERENCES gbk_IssueTypes (ID)
);