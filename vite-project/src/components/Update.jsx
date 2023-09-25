import React, { useState } from 'react';

function Update() {
    // สร้าง state เพื่อเก็บข้อมูลที่ต้องการอัปเดต
    const [dataToUpdate, setDataToUpdate] = useState({
        name: 'name',
        type: 'type',
        img: 'img',

    });

    // ฟังก์ชันเมื่อผู้ใช้กรอกข้อมูลในแบบฟอร์ม
    const handleInputChange = (e) => {
        const { name, value } = e.preventDefaault;
        setDataToUpdate({ ...dataToUpdate, [name]: value });
    };

    // ฟังก์ชันเมื่อผู้ใช้กดปุ่มอัปเดต
    const handleUpdate = () => {
        // ทำอะไรสักอย่างเมื่อผู้ใช้กดปุ่มอัปเดต เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์
        console.log('ข้อมูลที่ต้องการอัปเดต:', dataToUpdate);
    };

    return (
        <div>
            <h2>แบบฟอร์มอัปเดต</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="Resturant"></label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={dataToUpdate.field1}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        ประเภท:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        placeholder="Restaurant type"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        ประเภท:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="imageurl"
                        name="imageurl"
                        placeholder="Restaurant imageurl"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                    อัปเดต
                </button>
            </form>
        </div>
    );
}

export default Update;
