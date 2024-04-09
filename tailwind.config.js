/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {

		
		
			
			 colors: {
			   varDARKBEAKTOP: "#785001",
			   varMEDBEAKTOP: "#b67902",
			   varLIGHTBEAKTOP: "#fca802",
			   varDARKDUCKHEAD: "#1e3b28",
			   varMEDDUCKHEAD: "#284f35",
			   varLIGHTDUCKHEAD: "#528f85",
			   varDARKBLUEFEATHER: "#24558d",
			   varMEDBLUEFEATHER: "#2a61a1",
			   varLIGHTBLUEFEATHER: "#419aff",
			   varDARKDUCKCHEEKS: "#362e47",
			   varMEDDUCKCHEEKS: "#6b5b8d",
			   varLIGHTDUCKCHEEKS: "#a088d2",
			   varDARKNECK: "#412a32",
			   varMEDNECK: "#98648d",
			   varLIGHTNECK: "#c68199",
			   varDARKWING: "#3c302e",
			   varMEDWING: "#806661",
			   varLIGHTWING: "#cfa69d",
			   varDARKBEAK: "#70181a",
			   varMEDBEAK: "#962023",
			   varLIGHTBEAK: "#d72d32",
			   varDARKSPACE: "#08121c",
			   varMEDSPACE: "#1b3854",
			   varLIGHTSPACE: "#264d73",
			   varBoneWhite: "#fff9d7",
			   varfreshblood: "#ed181a",
			   varDCDARKBLUE: "#012344",
			   varDCMEDBLUE: "#01366a",
			   varDCLIGHTBLUE: "#01366a",
			   varDCDARKGREY: "#484a4d",
			   varDCMEDGREY: "#6b6e73",
			   varDCLIGHTGREY: "#b2b7bf",
			   varDCBLUEGREY: "#33485d",
			 },
		 
		 
			   screens: {
				 'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
				 'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
                  xxs: '320px',
				  xs: '420px',
				  sm: '640px',
				  md: '768px',
				  lg: '1024px',
				  xl: '1280px',
				  xxl: '1536px',
				  xxxl: '1920px',




			   },
		 
			   keyframes: {
				 'open-menu': {
				   '0%': { transform: 'scaleY(0)' },
				   '80%': { transform: 'scaleY(01.2)' },
				   '100%': { transform: 'scaleY(1)' },
				 },
			   },
			   
		
		
		
			   animation: {
				 'open-menu': 'open-menu 0.5s ease-in-out forwards'
			   },
			 },
		   
		   plugins: [],
		 }
		};
		 
		 
		 