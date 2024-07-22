/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/

const mockData = [
    {
      "firstName": "Alice",
      "lastName": "Smith",
      "customerID": "123456",
      "note": "Interested in engineering projects.",
      "profession": "engineer"
    },
    {
      "firstName": "Bob",
      "lastName": "",
      "customerID": "654321",
      "note": "Looking for freelance opportunities.",
      "profession": "freelancer"
    },
    {
      "firstName": "Charlie",
      "lastName": "Brown",
      "customerID": "987654",
      "note": "",
      "profession": "student"
    },
    {
      "firstName": "Diana",
      "lastName": "Johnson",
      "customerID": "456789",
      "note": "Product owner with a background in design.",
      "profession": "productOwner"
    },
    {
      "firstName": "Evan",
      "lastName": "",
      "customerID": "321654",
      "note": "Experienced system analyst with a focus on cybersecurity.",
      "profession": "systemAnalytics"
    }
  ]

  function sortUserName(user) {
    user.sort((a,b)=> {
      let compareSeq = a.firstName.localeCompare(b.firstName)
      if(compareSeq !==0 ) return compareSeq;

      if(a.lastName && b.lastName) {
        compareSeq = a.lastName.localeCompare(b.lastName)
        if(compareSeq !==0 ) return compareSeq;
      }else if(a.lastName || b.lastName) {
        return a.lastName ? 1 : -1;
      }
      return parseInt(a.customerID, 10) - parseInt(b.customerID, 10);
    })
    
  }

  sortUserName(mockData)

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/
  
  const professionPriority = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1
};

const sortByProfession = (users,professionPriority) => {
  users.sort((a,b)=>{
    const userA = professionPriority[a.profession] ?? 0
    const userB = professionPriority[b.profession] ?? 0
    return  userA - userB
  })

}

sortByProfession(mockData,professionPriority)