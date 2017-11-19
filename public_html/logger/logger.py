#! /usr/bin/python
import cgi, re, imp, json, time, sys


import cgitb
cgitb.enable(format='plain')

from dataModel import *
import credentials

def abort404(message):
    print 'Status: 404 Not Found %s\n' % message
    exit(-1)

def abort400(message):
    print 'Status: 400 Bad Request %s\n' % message
    exit(-1)

def getQueryArgument(argName, query=cgi.FieldStorage()):
    if not query.has_key(argName): abort400( argName + " not specified")
    argValue = query[argName].value

    return argValue


def logEvent():
    userid = getQueryArgument("userid")
    key = getQueryArgument("key")
    value = getQueryArgument("value")
    clientTime = getQueryArgument("time")

    xkv = XKeyValue(userid=userid, key=key, value=value, clientTime=clientTime)
    reply("Event logged: " + key)

def logNewEventTest():
    userid = getQueryArgument("userid")
    key = getQueryArgument("key")
    value = getQueryArgument("value")
    boardSize = getQueryArgument("boardSize")
    expCondition = getQueryArgument("expCondition")
    board = getQueryArgument("board")
    clientTime = getQueryArgument("time")

    xkv = XKeyValueNew(userid=userid, key=key, value=value, expCondition=expCondition, boardSize=boardSize, board=board, clientTime=clientTime)
    reply("Event logged: " + key)

def logFinalData():
    userid = getQueryArgument("userid")
    solvedCorrect = getQueryArgument("solvedCorrect")
    validatedCorrect = getQueryArgument("validatedCorrect")
    numActionsSolve = getQueryArgument("numActionsSolve")
    numActionsValidate = getQueryArgument("numActionsValidate")
    timeSolution = getQueryArgument("timeSolution")
    timeValidate = getQueryArgument("timeValidate")
    boardSize = getQueryArgument("boardSize")
    expCondition = getQueryArgument("expCondition")
    board = getQueryArgument("board")
    clientTime = getQueryArgument("time")


    #xkv = XKeyValueNew(userid=userid, key="TEsting", value="VAL", expCondition=expCondition, boardSize=boardSize, board=board, clientTime=clientTime)

    #xkv = XKeyValueFinal(userid=userid, expCondition=expCondition, boardSize=boardSize,board=board,solvedCorrect=solvedCorrect,validatedCorrect=validatedCorrect, numActionsSolve=numActionsSolve,numActionsValidate=numActionsValidate, timeSolution=timeSolution, timeValidate=timeValidate, clientTime=clientTime)
    xkv = XKeyValueFinal(userid=userid, expCondition="a", boardSize="b",board="c", solvedCorrect="d", validatedCorrect="e", numActionsSolve="f", numActionsValidate="g", timeSolution="h", timeValidation="i", clientTime=clientTime)
    reply("Event logged: " + "final")

def reply(status, data='nodata'):
    print "Content-Type: text/plain\n"

    msg = {'status':status, 'data':data}
    jmsg = json.dumps(msg)

    print 'jmsg'



def main():

    # dbname = getQueryArgument('experiment')
    dbname = 'tictactoe'
    dbSession = elixirConnect(credentials, dbname)

    try:
        requestType = getQueryArgument('reqType')
        if requestType == "logEvent":
            logNewEventTest()
        elif requestType == "logEventFinal":
            logFinalData()
        else:
            abort400("unknown request type: " + requestType)

        session.commit()

    except:
        #if anything goes wrong, roll back the database to the previous state
        dbSession.rollback()
        print 'Conent-Type: text/plain\n'
        print sys.exc_info()
        raise

if __name__ == '__main__':
    main()
