import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)

        const config = new DocumentBuilder()
            .setTitle('Social Network')
            .setDescription('Documentation')
            .setVersion('1.0.0')
            .addTag('my-doc')
            .build()
        const document = SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('/api/docs', app, document)

        app.enableCors({
            credentials: true,
            origin: "http://localhost:3000"
        })

        //app.useGlobalPipes(new ValidationPipe())

        await app.listen(PORT, () => console.log("server started on PORT " + PORT))
    } catch (err) {
        console.log(err)
    }
}
start()