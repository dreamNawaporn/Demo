import { Link } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ restaurant }) => {
    return (
        <div class="card" style="width: 18rem;">
            <img alt="เล็กใหญ่ ก๋วยเตี๋ยวต้มยำโบราณ - สาขาสามย่าน : ก๋วยเตี๋ยวต้มยำ( ลูกชิ้นรวม) เย็นตาโฟ" class="realImage___2TyNE show___3oA6B" 
            src="https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE2023061506390125488/detail/menueditor_item_fdc3cff087bc4df284ce0c6e80887733_1686810038738087066.webp"></img>
            <div class="card-body">
                <h2 class="name___2epcT">เล็กใหญ่ ก๋วยเตี๋ยวต้มยำโบราณ - สาขาสามย่าน</h2>
                <p class="card-text">ไม่มีหมู มีลูกชิ้นปลา+ลูกชิ้นกุ้ง+ลูกชิ้นแคะ+ลูกชิ้นกรอบ+ลูกชิ้นเต้าหู้เหลือง.</p>
                <a href="#" class="btn btn-primary">ราคา 55</a>
            </div>
        </div>;
        
        
    )
}

export default Card