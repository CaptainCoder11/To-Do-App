import React from 'react';
import MeetingCard from './shared/MeetingCard';

function MeetingList() {
    return (
        <div className=" bg-meetingsbg w-[30%] h-screen flex flex-col ml-16">
            <div className="flex flex-row mt-16 w-full "> 
            <img className="w-7 h-7  ml-auto" src="https://img.icons8.com/quill/50/group.png" alt="group"/>
            <h1 className=" w-16 h-16 ml-7  mr-7 font-Sofia-Pro-Light text-3xl md:text-2xl bg-secondary rounded-2xl text-center pt-4 shadow-2xl shadow-secondary text-white">5</h1>
            </div>
        <h1 className=" font-Sofia-Pro-Regular text-meetingtitle text-3xl mt-16 md:mt-14">Meetings Scheduled</h1>
        <div className=" overflow-y-auto">
        <MeetingCard time="8:05 AM - 9:20 AM" title="Meeting With Krish Joshi" bgcol="1"></MeetingCard>
        <MeetingCard time="10:05 AM - 12:20 PM" title="Product Testing" bgcol="2" userlist={["",""]}></MeetingCard>
        <MeetingCard time="03:00 PM - 04:20 PM" title="Product Testing" bgcol="3" userlist={["","",""]}></MeetingCard>
        <MeetingCard time="04:30 PM - 05:30 PM" title="Social Product Review" bgcol="4" userlist={["","","",""]}></MeetingCard>

        </div>
        </div>
    );
}

export default MeetingList;