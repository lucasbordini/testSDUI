import { Body, Controller, Post } from "@nestjs/common";
import { Layout } from "src/domain/layouts/layout";
import { L } from "src/domain/layouts/lego.builder";
import { AuthRequest } from "src/domain/model/auth.request";
import { GetHomeUseCase } from "src/domain/useCase/get.home.usecase";

@Controller('home')
export class HomeController {

    constructor(private readonly getHomeUseCase: GetHomeUseCase) { }

    @Post()
    async auth(@Body() request: AuthRequest) {
        return this.getHomeUseCase.invoke(
            request.auth_token
        );
    }

    @Post('settings')
    async settings() {
        return {
            screenId: 'settings',
            layoutVersion: 1,
            backgroundColor: 'rrmForeground',
            navbar: {
                title: 'Settings',
            },
            components: [
                L.column({
                    children: [
                        L.text({
                            text: 'Coming soon',
                            style: 'rrmBody',
                            specs: {
                                color: 'rrmTextSecondary',
                                margin: {
                                    top: 8,
                                    left: 16,
                                    right: 16,
                                    bottom: 8
                                }
                            }
                        }),
                        L.spacer()
                    ]
                })
            ]

        } as Layout
    }
}