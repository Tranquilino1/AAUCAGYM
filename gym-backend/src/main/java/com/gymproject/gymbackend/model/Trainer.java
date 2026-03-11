package com.gymproject.gymbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "trainers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String specialty;

    @Column(columnDefinition = "TEXT")
    private String bio;

    private String photoUrl;

    @OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
    private List<Schedule> schedules;
}
