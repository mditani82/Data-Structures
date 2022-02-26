class linkList{
  constructor(val){
    this.val = val
    this.next = null
  }
}

const printLinkList = (head) =>{
  let current = head
  while(current != null){
    console.log(current.val)
    current = current.next
  }
}

const printLinkListR = (head) =>{
  if (head === null) return
  console.log(head.val)
  return printLinkListR(head.next)

}

const a = new linkList('a')
const b = new linkList('b')
const c = new linkList('c')
const d = new linkList('d')

a.next = b
b.next = c
c.next = d

console.log(printLinkList(a))
console.log(printLinkListR(a))
