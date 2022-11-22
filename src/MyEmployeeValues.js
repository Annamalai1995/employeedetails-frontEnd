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
        "empName":"Manoj",
        "empUsername":"Maddy",
        "empPassword":"Maddy@4343",
        "empDesignation":"Java DEveloper",
        "empExp":"2",
        "empSalary":240000
    },{
        "empId":3,
        "empName":"Manoj",
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