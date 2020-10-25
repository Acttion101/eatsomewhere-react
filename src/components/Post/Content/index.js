import React,{ useState } from 'react'
import { BackContent} from './styled'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from'react-html-parser';
import styled from 'styled-components';

const Test = styled.div`
  width: 1300px;
  height: 150px;
  background-color: #A25C20;
  border-radius: 20px;
  select{
    width: 300px;
    height:40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
    flex-direction:column;
  }
  h1{
    color:white;
  }
`
function Post() {
  const [value ,setValue] = useState("")

  const handleOnChange = (e,editor) =>{
    const data =editor.getData()
    setValue(data)
  }
  return (
    <BackContent>
    <Test><h1>ชุมชน</h1>

 <select>
    <option value="volvo">มหาลัยเชียงใหม่</option>
    <option value="saab">มหาลัยเเม่โจ้</option>
    <option value="opel">มหาวิทยลัยธรรมศาสตร์</option>
    <option value="audi">มหาลัยจุฬาลงกรณ์</option>
</select>

<select>
    <option value="volvo">หมวดหมู่</option>
    <option value="saab">ร้านอาหาร</option>
    <option value="opel">ของหวาน</option>
    <option value="audi">ของกินเล่น</option>
</select>
    
    </Test>
    <from>
    <input type="text" placeholder="หัวข้อที่จะโพส"></input>
    <input type="text" placeholder="สถานที่ที่จะโพสลง เช่น มหาวิทยลัยเชียงใหม่"></input>
    <CKEditor editor={ClassicEditor}  placeholder="รายละเอียดโพส เช่น วันนี้กินร้านไหนดีแนะนำหน่อย"
    onChange={handleOnChange}
    />
    <button type="submit">โพส</button>
    {ReactHtmlParser(value)}
    </from>
    </BackContent>
  )
}
export default Post
