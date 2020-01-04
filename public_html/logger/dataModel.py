import datetime
from elixir import *
from sqlalchemy import desc, asc
import warnings

warnings.simplefilter('ignore', DeprecationWarning, 412)

TIME_FORMAT = "%a %Y/%m/%d %H:%M:%S"

def timeNowStr():
    now = datetime.datetime.now()
    timeStr = now.strftime(TIME_FORMAT)
    return timeStr

def timeParseStr(timeStr):
    dt = datetime.datetime.strptime(timeStr, TIME_FORMAT)
    return dt

class XKeyValue(Entity):
    using_options(tablename='keyvalue')

    userid = Field(VARCHAR(32))
    clientTime = Field(VARCHAR(32))
    key = Field(VARCHAR(32))
    value = Field(VARCHAR(1024))

    def __repr__(self):
        return '<userid: "%s", key: "%s">' % (self.userid, self.key) 


class XKeyValueNew(Entity):
    using_options(tablename='keyvalue3')

    userid = Field(VARCHAR(32))
    clientTime = Field(VARCHAR(32))
    key = Field(VARCHAR(32))
    value = Field(VARCHAR(1024))
    boardSize = Field(VARCHAR(32))
    expCondition = Field(VARCHAR(32))
    board = Field(VARCHAR(32))

    def __repr__(self):
        return '<userid: "%s", key: "%s">' % (self.userid, self.key)

class XKeyValueFinal(Entity):
    using_options(tablename='tttResults')

    userid = Field(VARCHAR(32))
    clientTime = Field(VARCHAR(32))
    boardSize = Field(VARCHAR(32))
    expCondition = Field(VARCHAR(32))
    board = Field(VARCHAR(32))
    solvedCorrect=Field(VARCHAR(32))
    validatedCorrect=Field(VARCHAR(32))
    numActionsSolve=Field(VARCHAR(32))
    numActionsValidate=Field(VARCHAR(32))
    timeValidation=Field(VARCHAR(32))
    timeSolution=Field(VARCHAR(32))


    def __repr__(self):
        return '<userid: "%s", key: "%s">' % (self.userid, self.key)


def elixirConnect(credentials,dbname):
    metadata.bind = 'mysql://%s:%s@%s/%s?charset=utf8mb4' % (credentials.user, credentials.passwd, credentials.host, dbname)
    #metadata.bind.echo = True   #for debugging
    setup_all() #Elixir magic
    create_all()    #More magic

    return session




if __name__ == '__main__':
    print "This module cannot be run as main"
