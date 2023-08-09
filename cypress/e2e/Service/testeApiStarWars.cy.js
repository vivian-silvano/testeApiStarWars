
it('Validaçao de pesquisa por "Luke Skywalker" ', ()=> {

    cy.request({
       
       method: "GET",
       url:"/people/1/"

    }).then((response)=>{

        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Luke Skywalker")
        expect(response.body.height).to.eq("172")
        expect(response.body.mass).to.eq("77")
        expect(response.body.hair_color).to.eq("blond")
        expect(response.body.skin_color).to.eq("fair")
        expect(response.body.eye_color).to.eq("blue")
        expect(response.body.films).to.deep.equal([
                                               "https://swapi.dev/api/films/1/",
                                               "https://swapi.dev/api/films/2/",
                                               "https://swapi.dev/api/films/3/",
                                               "https://swapi.dev/api/films/6/" ])

        })

})
    
    it('Validaçao de pesquisa por "C-3PO" ', ()=> {

        cy.request({
           
           method: "GET",
           url:"/people/2/"
    
        }).then((response)=>{
    
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("C-3PO")
            expect(response.body.height).to.eq("167")
            expect(response.body.mass).to.eq("75")
            expect(response.body.hair_color).to.eq("n/a")
            expect(response.body.skin_color).to.eq("gold")
            expect(response.body.eye_color).to.eq("yellow")
            expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/4/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/" ])
    
            })

        })

        it('Validaçao de pesquisa por "R2-D2" ', ()=> {

            cy.request({
               
               method: "GET",
               url:"/people/3/"
        
            }).then((response)=>{
        
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq("R2-D2")
                expect(response.body.height).to.eq("96")
                expect(response.body.mass).to.eq("32")
                expect(response.body.hair_color).to.eq("n/a")
                expect(response.body.skin_color).to.eq("white, blue")
                expect(response.body.eye_color).to.eq("red")
                expect(response.body.films).to.deep.equal([
                                                          "https://swapi.dev/api/films/1/",
                                                          "https://swapi.dev/api/films/2/",
                                                          "https://swapi.dev/api/films/3/",
                                                          "https://swapi.dev/api/films/4/",
                                                          "https://swapi.dev/api/films/5/",
                                                          "https://swapi.dev/api/films/6/" ])
        
                })
    
            })
    
