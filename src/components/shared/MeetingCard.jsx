function MeetingCard({time,title,userlist = [""],bgcol=1}){
       const colorVariants = {
        1: 'w-auto mr-7 rounded-2xl mt-10 md:mt-3 h-44 bg-meetingbg1',
        2: 'w-auto mr-7 rounded-2xl mt-10 md:mt-3 h-44 bg-meetingbg2',
        3: 'w-auto mr-7 rounded-2xl mt-10 md:mt-3 h-44 bg-meetingbg3',
        4: 'w-auto mr-7 rounded-2xl mt-10 md:mt-3 h-44 bg-meetingbg4'
    }
    let bg = 'bg-meetingbg' + bgcol
    console.log(bg)
    return (<div className={`${colorVariants[bgcol]}`}>
    <h1 className=" font-Sofia-Pro-Ultra-Light md:text-xs text-meetingtitle pt-9 md:pt-7 ml-7 md:ml-4">{time}</h1>
    <h1 className=" font-Sofia-Pro-Light md:text-xs text-meetingtitle mt-4 ml-7 md:ml-4">{title}</h1>
    <div className="flex flex-row mt-4 md:mt-7 ml-7 md:ml-4">
    {
        userlist.map((item, index) => (
        <img className=" w-7 h-7" src="https://img.icons8.com/doodle/48/user.png" alt="user"/>
        ))
    }  
    </div>
    </div>)
}

export default MeetingCard;