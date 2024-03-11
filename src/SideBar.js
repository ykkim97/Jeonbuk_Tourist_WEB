import { Grid } from "@mui/material";
import React from "react";

const SideBar = () => {
    return (
        <Grid container style={{ width : '100%', height : '100%' }}>
            <Grid xs={2}>
            <ul style={{ border : "1px solid black", padding : '30px' }}>
                <li>지도</li>
                <li>관광지 목록</li>
                <li>게시판</li>
            </ul>
            </Grid>
            <Grid xs={10}>
            <div style={{ border : "1px solid black", width : '100%', height : '100%' }}>
                콘텐츠 영역
            </div>
            </Grid>
        </Grid>
    )
}

export default SideBar;