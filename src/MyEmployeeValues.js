let myemployee=[
    {
        "empId":1,
        "empName":"Manoj",
        "empUsername":"Maddy",
        "empPassword":"Maddy@4343",
        "empDesignation":"Java DEveloper",
        "empExp":"2",
        "empSalary":240000
    },
    {
        "empId":2,
        "empName":"Praveen",
        "empUsername":"Maddy",
        "empPassword":"Maddy@4343",
        "empDesignation":"Java DEveloper",
        "empExp":"2",
        "empSalary":240000
    },{
        "empId":3,
        "empName":"Mohan",
        "empUsername":"Maddy",
        "empPassword":"Maddy@4343",
        "empDesignation":"Java DEveloper",
        "empExp":"2",
        "empSalary":240000
    }
]

export const create=(data)=>
{
    myemployee.push(data)
}

export const list=()=>
{
  return  myemployee;
}

export const read=(index)=>
{
    return myemployee[index];
}

export const FetchExact=(name)=>
{
    const temp=myemployee.filter((element)=>
    {
        return element.empName===name;
    })
    return temp[0];
}

export const alter=(data,place)=>
{
 myemployee[place]=data;
}

export const remove=(index)=>
{
    myemployee=myemployee.filter((d,i)=>
    {
        return i!==index;
    })
    return myemployee
}