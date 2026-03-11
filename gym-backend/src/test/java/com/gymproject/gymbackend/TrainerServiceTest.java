package com.gymproject.gymbackend;

import com.gymproject.gymbackend.model.Trainer;
import com.gymproject.gymbackend.repository.TrainerRepository;
import com.gymproject.gymbackend.service.TrainerService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class TrainerServiceTest {

    @Mock
    private TrainerRepository trainerRepository;

    @InjectMocks
    private TrainerService trainerService;

    @Test
    void testGetTrainerById() {
        Trainer trainer = new Trainer();
        trainer.setId(1L);
        trainer.setName("John Doe");

        when(trainerRepository.findById(1L)).thenReturn(Optional.of(trainer));

        Optional<Trainer> found = trainerService.getTrainerById(1L);

        assertEquals("John Doe", found.get().getName());
    }
}
