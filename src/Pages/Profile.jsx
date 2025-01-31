import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  console.log(user);

  return (
    <div>
      {isAuthenticated && (
        <div className="flex  gap-x-5  rounded-2xl border-1 border-slate-400 
         w-96 m-auto mt-14 p-5 shadow-lg   shadow-slate-600-500  ">
          <div>
            <img className="rounded-full" src={user.picture} alt="" />
          </div>
          <div className="mt-4">
            <h1>
              Name: <span className="border-b-2  border-black  "> {user.name}</span>
            </h1>
            <h1>
              Email:<span className="border-b-2 border-black "> {user.email}</span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
