import { z } from 'zod'


const upstreamSchema = z.object({
    id: z.string(),
    url: z.string()
})

const headerSchema = z.object({
    key: z.string(),
    value: z.string()
})

const rulesSchema = z.object({
    path: z.string(),
    upstrema: z.array(z.string())
})
const serverSchema = z.object({
    listen: z.number(),
    worker: z.number().optional(),
    upstream: z.array(upstreamSchema),
    header: z.array(headerSchema).optional(),
    rules: z.array(rulesSchema)
})


export const rootConfigSchema = z.object({
    server: serverSchema
})