function SetTimeOut()
{
    console.log("line 1 will executed first");
    console.log("line 2 will executed second");
    setTimeout(()=>{console.log("Line 3 will executed last")},2000);
    console.log("line 4 will executed in 4th");
    console.log("line 5 will executed in 5th");
}
SetTimeOut();