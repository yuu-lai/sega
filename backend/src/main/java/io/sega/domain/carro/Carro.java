package io.sega.domain.carro;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import io.sega.core.entity.AbstractEntity;
import io.sega.domain.garagem.Garagem;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "carro")
@Getter @Setter
public class Carro extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "fabricante", nullable = false)
    private String fabricante;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "modelo", nullable = false)
    private String modelo;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "versao", nullable = false)
    private String versao;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "descricao", nullable = false)
    private String descricao;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "cor", nullable = false)
    private String cor;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "valor", nullable = false)
    private String valor;

    @Valid
    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "garagem_id", referencedColumnName = "id")
    private Garagem garagem;

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getVersao() {
        return versao;
    }

    public void setVersao(String versao) {
        this.versao = versao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public Garagem getGaragem() {
        return garagem;
    }

    public void setGaragem(Garagem garagem) {
        this.garagem = garagem;
    }

}
