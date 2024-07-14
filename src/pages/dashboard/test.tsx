import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import Title from "antd/es/typography/Title";

const Page = ()=>{
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
  return(
    
    <>
        <Title level={2} className="text-center">Test</Title>
        <div style={{
            paddingBottom:20,
            display:"flex",
            justifyContent:"space-between"
            }}>
            <Input placeholder="Search" style={{
                width:200
            }}/>
            <Button type="primary" icon={<PlusCircleFilled/>} iconPosition="end">Add</Button>
        </div>        
        <Table dataSource={dataSource} className="border " columns={columns} />
    </>
    ); 
} 
 export default Page