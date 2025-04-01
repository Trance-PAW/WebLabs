import IconCareers from "./IconCareers";

const Careers = () => {

    return(
        <div className =" 
            xl:flex
            xl:flex-row
            xl:justify-center
            xl:gap-14
            lg:grid
            lg:grid-cols-2
            sm:grid
            sm:grid-cols-2
            gap-4
            grid
            grid-cols-2
            text-black
            text-sm 
            md:text-base
            
        ">
            <IconCareers img='/images/icon/ICON_IC.png' name={'IC'}/>
            <IconCareers img='/images/icon/ICON_ICC_2.png' name={'ICC'}/>
            <IconCareers img='/images/icon/ICON_IMM.png' name={'IMM'}/>
            <IconCareers img='/images/icon/ICON_ISCH_2.png' name={'ISCH'}/>
            <IconCareers img='/images/icon/ICON_IST_2.png' name={'IST'}/>
            <IconCareers img='/images/icon/ICON_ITP.png' name={'ITP'} />
            <IconCareers img='/images/icon/ICON_IF_2.png' name={'IF'}/>
            <IconCareers img='/images/icon/ICON_IG.png' name={'IG'}/>
            <IconCareers img='/images/icon/ICON_IM.png' name={'IM'}/>

        </div>

    );
}

export default Careers;