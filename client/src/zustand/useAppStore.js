import {create} from 'zustand';


const useAppStore = create((set) => ({
	authUser: JSON.parse(localStorage.getItem("authUser")) || null ,
	setAuthUser: (authUser) => set({ authUser }),
	link:"http://localhost:5000/send/",
	setLink: (link) => set({ link }),
	confessions:null,
	setConfessions:(confessions) => set({ confessions }),
	
})
)

export default useAppStore;