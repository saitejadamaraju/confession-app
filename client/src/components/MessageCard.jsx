

const MessageCard = () =>
    {
        return(

            <div className="w-[300px] sm:w-[300px] m-1 bg-[#FB9AD1] rounded-lg cursor-pointer">
                {/* heading */}
                <div className="h-[50px] sm:[75px] bg-[#FB9AD1] flex justify-center items-center p-1 rounded-lg">
                    <p className="font-bold text-lg font-style: italic">💓 Message For You 💓</p>
                </div>
                {/* body */}
                <div className="h-[100px] sm:[125px] bg-[#FFCDEA] m-1 p-1 rounded-md overflow-y-auto" style={{ maxHeight: "calc(100vh - 100px)" }}>
                    <p className="font-semibold text-md font-style: italic">confession Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, distinctio nobis iure quos voluptate officiis ex, molestiae laboriosam temporibus blanditiis, exercitationem quis? Ipsum harum ullam ducimus deserunt, saepe obcaecati esse.</p>
                </div>
            </div>
        )
    }

export default MessageCard;