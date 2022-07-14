const AddHome = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      // Send token to your backend via HTTPS
      // ...
    })
    .catch(function (error) {
      // Handle error
    });
  return (
    <div>
      <h1>welcome addmin</h1>
    </div>
  );
};
export default AddHome;
