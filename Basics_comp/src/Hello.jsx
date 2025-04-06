function Hello () {

  // let myName = 'Ashish';
  let number = 456;

  let fullName = () => {
    return "Ashish Singh"
  }



  return <h3>
    MessageNo:- {number} Hello this is the future Speaking my name is {fullName()}
    </h3>
}

export default Hello;