function universalSet(){
    this.count = 0
    this.storage = []

    this.has = (element) => {

        if(!this.storage.includes(element)){
            return `${element} is not contained in the array`
        }
        else{
            const index = this.storage.indexOf(element)
            return `${element} is found on position ${index} of the array`
        }
    }

    this.add = (element) => {
        if(!this.storage.includes(element)){
            this.storage[this.count] = element
            this.count++
            return true
        }

        return false
        
    }

    this.values = () => {
        return this.storage
    }

    this.size = () => {
        return this.count
    }

    this.delete = (element) => {
        if(!this.storage.includes(element)){
           console.log(`${element} can not be deleted because its not a member of the set`)
           return false
        }

        const index = this.storage.indexOf(element)
        const memory = this.storage[index]
        console.log(`${memory} has been successively deleted`)
        this.storage.splice(index, 1)
        this.count--

        return true

    }

    this.union = (otherset) => {
        this.unionSet = new universalSet()
        let firstSet = this.values()
        let secondSet = otherset.values()

        firstSet.forEach((e) => {
            this.unionSet.add(e)
        })

        secondSet.forEach((e) => {
            this.unionSet.add(e)
        })

        return this.unionSet.storage
    }

    this.intersection = (otherset) => {
        this.intersectionSet = new universalSet()
        let secondSetStorage = new universalSet()
        let secondValues = otherset.values()
        let firstValues = this.values()
        secondValues.forEach((e) => {
            secondSetStorage.storage.push(e)
        })

        firstValues.forEach((e) => {
            if(secondSetStorage.storage.includes(e)){
                this.intersectionSet.storage.push(e)
            }
        })
        
        return this.intersectionSet.storage
    }

    
}