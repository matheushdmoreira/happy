import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm'
import { Image } from './Image'

@Entity('orphanages')
export class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to(value) {
        return value
      },
      from(value) {
        return parseFloat(value)
      },
    },
  })
  latitude: number

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to(value) {
        return value
      },
      from(value) {
        return parseFloat(value)
      },
    },
  })
  longitude: number

  @Column()
  about: string

  @Column()
  instructions: string

  @Column()
  opening_hours: string

  @Column()
  open_on_weekends: boolean

  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}
