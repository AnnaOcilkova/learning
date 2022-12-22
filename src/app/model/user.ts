export interface User {
id: number | null;
firstName : string | null;
lastName: string | null;
userName: string;
password: string ;

email: string | null;
address: string | null;
userCountry: string | null;
telephoneNumber: string | null;
profilePicture: Blob | null;
apprenticeshipId: number | null;

createdAt: Date | null;
updatedAt: Date | null;
emailConfirmed: boolean | null;
status: string | null;
role: string | null;

registrationToken: string | null;
expRegistrationToken: number | null;
resetPasswordToken: string | null;
resetPasswordExpirationToken: number | null;

}


