package com.kxb.employmentServices.controller;

import com.kxb.employmentServices.dto.JobDto;
import com.kxb.employmentServices.entity.Job;
import com.kxb.employmentServices.service.JobService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/job")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/{id}")
    public Job getById(@PathVariable Long id) {
        return jobService.getById(id);
    }

    @GetMapping("/getTo4Job")
    public List<Job> getTo4Job() {
        return jobService.getTo4Job();
    }

    @GetMapping("/page")
    public Page<Job> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable, @RequestParam(required = false) String name) {
        return jobService.page(pageable, name);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Job save(@RequestBody @Valid JobDto.SaveRequest request) {
        return jobService.save(request);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Job update(@PathVariable Long id, @RequestBody @Valid JobDto.UpdateRequest request) {
        return jobService.update(id, request);
    }

    // 获取所有职位
    @GetMapping("/getAll")
    public List<Job> getAll() {
        return jobService.getAll();
    }
}
