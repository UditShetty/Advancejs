function Product(name,category,image,price,gender,sold){
    this.name=name
    this.category=category
    this.image=image
    this.price= price
    this.gender= gender
    this.sold= sold
}

var arr=[]
function submitProduct(e){
    event.preventDefault()
 //console.log("triggered")
  let form = document.querySelector("#form")


  let name= document.querySelector("#name").value
  let category= document.querySelector("#category").value
  let image= document.querySelector("#image").value
  let price= document.querySelector("#price").value
  let gender= document.querySelector("#gender").value
  let sold= document.querySelector("#sold").value

  let p= new Product(name,category,image,price,gender,sold)
 arr.push(p)
  //console.log(arr)
   localStorage.setItem("Products",JSON.stringify(arr))
  //console.log(name, category, image, price, gender,sold)



}