const nunjucks = require(`nunjucks`)
const express = require("express")
const indexRouter = require("./routes/index")

const app = express()

const port = process.env.PORT || 3000

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(express.static(`public`))
app.use("/", indexRouter)


app.get("/", (request, response) => {
    response.render('index.njk', { title: 'hello from template' })
})



app.listen(port, () => {
    console.log(`server running on port ${port}`)
})