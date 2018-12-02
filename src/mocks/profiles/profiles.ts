import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
  { 
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    schoolName: 'AC',
    currentGrade: 11,
    mName: 'Tommy Johnson',
    mSchoolName: 'Longfellow',
    mCurrentGrade: 2
  },
  { 
    firstName: 'Tom',
    lastName: 'Smith',
    email: 'tom@smith.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    schoolName: 'St. C',
    currentGrade: 12,
    mName: 'Jimmy Jones',
    mSchoolName: 'Lincoln',
    mCurrentGrade: 4
  },
  { 
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    schoolName: 'HHS',
    currentGrade: 11,
    mName: 'Cindy Johnson',
    mSchoolName: 'Longfellow',
    mCurrentGrade: 2
  },
  { 
    firstName: 'Paul',
    lastName: 'Johnson',
    email: 'paul@johnson.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    schoolName: 'AC',
    currentGrade: 11,
    mName: 'Bobby Smith',
    mSchoolName: 'ACMS',
    mCurrentGrade: 6
  },
]

export const USER_LIST = userList;