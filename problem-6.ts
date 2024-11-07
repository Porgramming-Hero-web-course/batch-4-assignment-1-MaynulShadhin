interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  profile: Profile,
  updatedProfile: Partial<Profile>
): Profile => {
  return { ...profile, ...updatedProfile };
};

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
