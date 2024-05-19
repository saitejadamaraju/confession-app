import {create} from 'zustand';


const useAppStore = create((set) => ({
	authUser: JSON.parse(localStorage.getItem("authUser")) || null ,
	setAuthUser: (authUser) => set({ authUser }),
	link:"https://confession-app-u9bl.onrender.com/",
	setLink: (link) => set({ link }),
	confessions:null,
	setConfessions:(confessions) => set({ confessions }),
	
})
)

export default useAppStore;