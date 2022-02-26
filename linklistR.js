class linkList{
  constructor(val){
    this.val = val
    this.next = null
  }
}

const linkListR = (head) =>{
  if (head === null) return []
  let pre = null
  let current = head

  while(current != null){

    const next = current.next
    current.next = pre
    pre = current
    current = next

  }
  return pre
}

const a = new linkList('a')
const b = new linkList('b')
const c = new linkList('c')
const d = new linkList('d')

a.next = b
b.next = c
c.next = d

console.log(linkListR(a))
