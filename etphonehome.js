wait(200);

myCallerID=currentCall.callerID;
myCalledID=currentCall.calledID;
mySessionID=currentCall.sessionId;

if(currentCall.initialText){
message('+) New Message for E.T: ' + currentCall.initialText + ' from ' + myCallerID, {
    to:"+000000000",
    network:"SMS"
});
}
else {

say("Hello. Thank you for calling E. T. Phono home service.", {voice:"dave"});

record("Please record your 30 second message after the beep.", {
   beep:true,
   recordFormat:"audio/wav",
   voice:"dave",
   timeout:10,
    silenceTimeout:4,
    maxTime:30,
   recordURI:"ftp://username:password@ftpsite/ftpdirectory/"+currentCall.callerID+"-"+currentCall.calledID+"-"+currentCall.sessionId+".wav",
    transcriptionOutURI: "mailto:email@youremail.com",
    transcriptionID:"http://externalURLforrecordings/ftpdirectory/"+myCallerID+"-"+myCalledID+"-"+mySessionID+".wav"
    }
);
 
hangup();

 
call('+0000000000', {
  network:"SMS"});
say("+) ET Message: http://externalURLforrecordings/ftpdirectory/"+myCallerID+"-"+myCalledID+"-"+mySessionID+".wav");

}