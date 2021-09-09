package com.denersonpinas.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.denersonpinas.dsvendas.dto.SaleDTO;
import com.denersonpinas.dsvendas.entities.Sale;
import com.denersonpinas.dsvendas.repositories.SaleRepository;
import com.denersonpinas.dsvendas.repositories.SellerRepository;

@Service // Isso possibilita a utilização dessa class em outras partes do nosso projeto
public class SaleService {
	
	@Autowired // Faz com que as instancia seja ejetada automaticamente pelo framework
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pegeable) {
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pegeable);
		return result.map(x -> new SaleDTO(x));
	}	
}
